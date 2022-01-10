//definindo as dimensões do slide do carousel
alteraImagemSlide();

function alteraImagemSlide(){
				if (window.innerWidth <= 610) {
					document.getElementById("redimensiona1").src='imagens/imgteste1.2.jpg';
				}else{
					document.getElementById("redimensiona1").src = 'imagens/imgteste1.1.jpg';
				}

				if (window.innerWidth <= 610) {
					document.getElementById("redimensiona2").src='imagens/imgteste1.2.jpg';
				}else{
					document.getElementById("redimensiona2").src = 'imagens/imgteste1.1.jpg';
				}
			}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
