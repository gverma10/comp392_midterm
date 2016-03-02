/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var gui: GUI;
    var stats: Stats;
    var pointLight: PointLight;
    var planeGeometry: PlaneGeometry;
    var planeMaterial: LambertMaterial;
    var plane: Mesh;
    var cube1: Mesh;
    var cube1Geometry: CubeGeometry;
    var cube1Material: LambertMaterial;
    var cube1: Mesh;
    var cube1Geometry: CubeGeometry;
    var cube1Material: LambertMaterial;
    var cube2: Mesh;
    var cube2Geometry: CubeGeometry;
    var cube2Material: LambertMaterial;
    var cube3: Mesh;
    var cube3Geometry: CubeGeometry;
    var cube3Material: LambertMaterial;
    var cube4: Mesh;
    var cube4Geometry: CubeGeometry;
    var cube4Material: LambertMaterial;
    var cube5: Mesh;
    var cube5Geometry: CubeGeometry;
    var cube5Material: LambertMaterial;

    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        
        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* ENTER CODE HERE */
        
        // Point Light
        pointLight = new PointLight(0xffffff);
        pointLight.position.set(-4, 6, -4);
        scene.add(pointLight);
        console.log("Added pointLight to scene");
        
        //add plane
        planeGeometry = new PlaneGeometry(7, 7);
        planeMaterial = new LambertMaterial({ color: 0xe75d14 });
        plane = new Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        scene.add(plane);
        console.log("Added plane to scene");
 
        //add first cube
        cube1Geometry = new CubeGeometry(5, 5, 5);
        cube1Material = new LambertMaterial({ color: 0xc9c9c9 });
        cube1 = new Mesh(cube1Geometry, cube1Material);
        cube1.position.setY(0);
        scene.add(cube1);
        console.log("Added first cube to scene");
        
        //add second cube
        cube2Geometry = new CubeGeometry(4, 4, 4);
        cube2Material = new LambertMaterial({ color: 0xc9c9c9 });
        cube2 = new Mesh(cube2Geometry, cube2Material);
        cube2.position.setY(5);
        scene.add(cube2);
        console.log("Added second cube to scene");
        
        //add third cube
        cube3Geometry = new CubeGeometry(3, 3, 3);
        cube3Material = new LambertMaterial({ color: 0xc9c9c9 });
        cube3 = new Mesh(cube3Geometry, cube3Material);
        cube3.position.setY(9);
        scene.add(cube3);
        console.log("Added third cube to scene");
        
        //add fourth cube
        cube4Geometry = new CubeGeometry(2, 2, 2);
        cube4Material = new LambertMaterial({ color: 0xc9c9c9 });
        cube4 = new Mesh(cube4Geometry, cube4Material);
        cube4.position.setY(12);
        scene.add(cube4);
        console.log("Added fourth cube to scene");
        
        //add fifth cube
        cube5Geometry = new CubeGeometry(1, 1, 1);
        cube5Material = new LambertMaterial({ color: 0xc9c9c9 });
        cube5 = new Mesh(cube5Geometry, cube5Material);
        cube5.position.setY(14);
        scene.add(cube5);
        console.log("Added fifth cube to scene");
        
        // add controls
        gui = new GUI();
        control = new Control();
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */
        gui.add(controlObject, 'rotationSpeed', -0.5, 0.5);
        gui.add(controlObject, "toggle");
    }

    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }

    // Setup main game loop
    function gameLoop(): void {
        stats.update();
        
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 15.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }

    window.onload = init;

    return {
        scene: scene
    }

})();

