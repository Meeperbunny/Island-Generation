//Basic Canvas

class Canvas {

		constructor(id, bgColor, fullscreen = false) {

			this.data = document.getElementById(id);
			this.context = this.data.getContext("2d");
			
			this.x = 0;
			this.y = 0;
			this.color = bgColor;
			this.fullscreen = fullscreen;

			if (fullscreen) {
				
				document.body.style.margin = 0;
				var parent = this;
				
				parent.data.width = window.innerWidth; 
				parent.data.height = window.innerHeight;
				
				window.addEventListener("resize", function(event) {
					parent.data.width = window.innerWidth; 
					parent.data.height = window.innerHeight;});

			}

		}

		move(x, y) {

			this.x += x;
			this.y += y;
			
			this.context.translate(x, y);

		}

		drawRect(x1, y1, x2, y2, color) {

			this.context.fillStyle = color;
			this.context.fillRect(x1, y1, x2, y2);

		}

		fill(color) {

			this.context.fillStyle = color;
			this.drawRect(-this.x, -this.y, this.data.width, this.data.height);

		}

		clear() {

			this.fill('white');

		}

	}