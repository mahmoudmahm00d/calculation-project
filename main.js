import * as THREE from "three";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as Stats from "stats.js";

var stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Environment
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("resources/images/sky.jpg", () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff22 });
const cube = new THREE.Mesh(geometry, material);
const controls = new OrbitControls(camera, renderer.domElement);
scene.add(cube);

// Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(pointLight, ambientLight);

// Helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

// Camera
camera.position.z = 5;

// Add GUI controls element
const params = {
  size: 1,
  velocityX: 0.01,
  velocityY: 0.01,
  velocityZ: 0.01,
  positionX: 0,
  positionY: 0,
  positionZ: 0,
};

let lookAt = new THREE.Vector3(0, 0, 0);
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      lookAt.add(new THREE.Vector3(1, 0, 0));
      camera.lookAt(lookAt);
      break;
    case "s":
      lookAt.add(new THREE.Vector3(-1, 0, 0));
      camera.lookAt(lookAt);
      break;
    case "a":
      lookAt.add(new THREE.Vector3(0, 0, 1));
      camera.lookAt(lookAt);
      break;
    case "d":
      lookAt.add(new THREE.Vector3(0, 0, -1));
      camera.lookAt(lookAt);
      break;
    default:
      break;
  }
});

const gui = new GUI();
gui.add(params, "size", 1, 5, 0.01).name("size");
gui.add(params, "velocityX", 0, 1, 0.01).name("Velocity X");
gui.add(params, "velocityY", 0, 1, 0.01).name("Velocity Y");
gui.add(params, "velocityZ", 0, 1, 0.01).name("Velocity Z");
gui.add(params, "positionX", -10, 10, 1).name("Position X");
gui.add(params, "positionY", -10, 10, 1).name("Position Y");
gui.add(params, "positionZ", -10, 10, 1).name("Position Z");

// Main function
function animate() {
  stats.begin();

  cube.rotation.x += params.velocityX;
  cube.rotation.y += params.velocityY;
  cube.rotation.z += params.velocityZ;
  cube.position.x = params.positionX;
  cube.position.y = params.positionY;
  cube.position.z = params.positionZ;
  cube.scale.set(params.size, params.size, params.size);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // controls.update();
  stats.end();
}

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
