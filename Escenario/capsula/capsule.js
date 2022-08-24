//escena
const scene = new THREE.Scene();

{
const color = 0x181818;
const near = 1;
const far = 6;
const density = 10;
  scene.fog = new THREE.Fog(color, near, far, density);
}

//camera 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria
const geometry = new THREE.CapsuleGeometry( 1, 1, 5, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0xCB4335} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 4;
camera.position.x = 0.3;
camera.position.y = -0.5;

//animacion
function animate(){
    requestAnimationFrame( animate );
    
    capsule.rotation.x += 0.02;
    capsule.rotation.y += 0.1;

    renderer.render( scene, camera );
}
animate();
