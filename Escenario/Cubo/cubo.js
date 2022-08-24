//escena
const scene = new THREE.Scene();

scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('../images/New-York.jpg', function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x181818} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;
camera.position.x = 0.3;
camera.position.y = -0.5;

//animacion
function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    
    renderer.render( scene, camera );
}
animate();  













/* //escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(181818)

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//animacion
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate(); */