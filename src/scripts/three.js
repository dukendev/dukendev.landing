import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


    function renderCanvas() {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        
        const renderer = new THREE.WebGLRenderer({
          canvas : document.querySelector('#bg'),
        });
        
        renderer.setPixelRatio( window.devicePixelRatio );
        
        renderer.setSize( window.innerWidth, window.innerHeight);
        camera.position.setZ(200);
        
        
        
        const geometry = new THREE.TorusGeometry(20 ,30,16,10)
        // const material = new THREE.MeshBasicMaterial({ color : 0xff6434, wireframe : true});
        
        const material = new THREE.MeshBasicMaterial({ color : 0xff67EEF9, wireframe : true});

        
        const torus = new THREE.Mesh(geometry,material);
        
        scene.add(torus)
        const pointLight = new THREE.PointLight(0xffffff,100)
        // const pointLightHelper = new THREE.PointLightHelper(pointLight)
        const ambientLight = new THREE.AmbientLight(0xFFFFFF)
        scene.add(pointLight,ambientLight)
        
        const controls = new OrbitControls(camera, renderer.domElement);
        
        function addStar() {
           const geometry = new THREE.SphereGeometry(0.25,24,24);
           const material = new THREE.MeshStandardMaterial({color : 0xffffff})
           const star = new THREE.Mesh(geometry, material);
           const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));
           star.position.set(x,y,z);
           scene.add(star)
        }
        
        Array(2000).fill().forEach(addStar)
        var loader = new GLTFLoader();
        var cat = null;
        loader.load('./src/assets/models/miniature_cat.glb',function(gltf){
                cat = gltf.scene;   
                cat.scale.set(50, 50, 50);
                cat.position.y = 4;
                cat.position.z = 100;
                cat.position.x = -200;
                scene.add(cat);
        });

        var loader2 = new GLTFLoader();
        var mac = null;
        loader2.load('./src/assets/models/keyboard.glb',function(gltf){
                mac = gltf.scene;   
                mac.scale.set(500, 500, 500);
                mac.position.y = -200;
                mac.position.z = -10;
                mac.position.x = 80;
                scene.add(mac);
        });
        
        var loader3 = new GLTFLoader();
        var mcbook = null;
        loader3.load('./src/assets/models/macbook_pro_16_2021.glb',function(gltf){
                mcbook = gltf.scene;   
                mcbook.scale.set(20, 20, 20);
                mcbook.position.y = 0;
                mcbook.position.z = 100;
                mcbook.position.x = 100;
                scene.add(mcbook);
        });

        function animate() {
          requestAnimationFrame( animate);
          torus.rotation.x += 0.01; 

          torus.rotation.y += 0.01; 
        
          
           if(cat != null){
            cat.rotation.y += 0.001;
            cat.rotation.z += 0.05;
            cat.rotation.x += 0.025;
           }
           if(mac != null){
            mac.rotation.z += 0.01;
            mac.rotation.y += 0.05;
            mac.rotation.x += 0.025;
           }
           if(mcbook != null){
                mcbook.rotation.z += 0.05;
                mcbook.rotation.x -= 0.001;
           }
        //    camera.rotateY(0.005);
           
          controls.update();
          renderer.render(scene,camera);
        }
        
        animate()

        function moveCamera() {
            const topScoll = document.body.getBoundingClientRect().top;
            camera.position.x = -0.01 * topScoll;

            camera.position.y = -0.01 * topScoll;

            camera.position.z = -0.1 * topScoll;

        }
        document.body.onscroll=moveCamera


    }
    renderCanvas()
