/*global TinyTurtle*/
TinyTurtle.apply(window);

/*global forward*/
/*global right*/
function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}
function triangle(x){
right(60);
forward(x);
right(60);
forward(x);
right(150);
forward(x);
}

function shape(size, angle){
forward(size);
right(angle);
forward(size);
right(angle);
forward(size);
right(angle);
forward(size);
right(angle);
forward(size);
}

/*global stamp*/
// Type your function call below
// square (50);
//  triangle (50);
shape(50, 70);
stamp();
