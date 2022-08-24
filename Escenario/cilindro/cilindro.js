//Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria
const geometry = new THREE.CylinderGeometry( 5, 2, 13, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 20;
camera.position.x = 0.2;
camera.position.y = -0.2;

//animacion
function animate(){
    requestAnimationFrame( animate );

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.02;
    
    renderer.render( scene, camera);

}
animate();