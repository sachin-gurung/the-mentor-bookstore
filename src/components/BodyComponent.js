import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
// import './App.css';

const BodyComponent = (props) => {
  return (
    <div>
      <Card hoverable>
        <CardBody>
          <CardTitle tag="h5">Cat</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about cats.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/cat.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam faucibus purus. Amet venenatis urna cursus eget nunc scelerisque viverra. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Non blandit massa enim nec dui nunc mattis. Feugiat nibh sed pulvinar proin. Placerat duis ultricies lacus sed turpis. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Eget nunc lobortis mattis aliquam faucibus. Pharetra diam sit amet nisl. Purus gravida quis blandit turpis. Amet dictum sit amet justo donec. Nisl purus in mollis nunc sed id semper. Metus vulputate eu scelerisque felis imperdiet proin. Dolor magna eget est lorem ipsum dolor.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Dog</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about dogs.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/dog.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nunc id cursus metus aliquam eleifend mi. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Enim eu turpis egestas pretium aenean. Adipiscing at in tellus integer. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Ut sem viverra aliquet eget sit amet tellus cras. Ut enim blandit volutpat maecenas volutpat. Neque gravida in fermentum et sollicitudin ac orci. Libero justo laoreet sit amet cursus sit amet. Lorem donec massa sapien faucibus. At consectetur lorem donec massa sapien faucibus et molestie. Metus vulputate eu scelerisque felis imperdiet proin.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Mouse</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about mouse.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/mouse.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris. Vestibulum lectus mauris ultrices eros. Augue ut lectus arcu bibendum at varius vel pharetra vel. Lobortis scelerisque fermentum dui faucibus. Sapien eget mi proin sed libero. Urna id volutpat lacus laoreet non curabitur gravida. Pharetra vel turpis nunc eget lorem dolor sed. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Cras pulvinar mattis nunc sed blandit libero volutpat sed.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Bird</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about birds.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/bird.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer feugiat scelerisque varius. Tortor posuere ac ut consequat semper viverra nam. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lobortis feugiat vivamus at augue eget arcu. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Fames ac turpis egestas sed tempus urna. Tempor orci eu lobortis elementum nibh tellus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Sit amet consectetur adipiscing elit pellentesque. Ipsum suspendisse ultrices gravida dictum fusce ut. Hac habitasse platea dictumst quisque. Commodo viverra maecenas accumsan lacus.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>
      
      <Card>
        <CardBody>
          <CardTitle tag="h5">Monkey</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about monkeys.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/monkey.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida hendrerit. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Mollis aliquam ut porttitor leo a. Egestas sed tempus urna et. Sociis natoque penatibus et magnis dis parturient montes. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Enim tortor at auctor urna. Mi in nulla posuere sollicitudin aliquam ultrices. Mi in nulla posuere sollicitudin aliquam ultrices sagittis.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Donkey</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about donkeys.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/donkey.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus. Nunc sed augue lacus viverra vitae. Eleifend quam adipiscing vitae proin. Ultrices eros in cursus turpis. Nisl pretium fusce id velit ut tortor pretium. Sed sed risus pretium quam vulputate dignissim suspendisse in. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. In nulla posuere sollicitudin aliquam. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Amet justo donec enim diam vulputate ut pharetra sit. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Purus faucibus ornare suspendisse sed. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Praesent semper feugiat nibh sed pulvinar proin gravida. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Nec ullamcorper sit amet risus. Porttitor lacus luctus accumsan tortor.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Horse</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about horses.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/horse.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris augue neque gravida in fermentum et. Eget magna fermentum iaculis eu non. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Diam maecenas sed enim ut sem viverra aliquet. Integer feugiat scelerisque varius morbi enim nunc faucibus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Eu turpis egestas pretium aenean. Amet consectetur adipiscing elit pellentesque habitant. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Duis at consectetur lorem donec.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Fish</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about fishes.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/fish.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Nisl suscipit adipiscing bibendum est ultricies integer quis. In est ante in nibh. Placerat duis ultricies lacus sed turpis tincidunt. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Enim sed faucibus turpis in eu mi bibendum. Et tortor consequat id porta nibh venenatis cras sed felis. Faucibus ornare suspendisse sed nisi lacus sed viverra. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Snake</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about snakes.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/snake.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet sagittis id consectetur purus ut. Sed risus pretium quam vulputate dignissim suspendisse in. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Id velit ut tortor pretium viverra suspendisse potenti nullam. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Nisi porta lorem mollis aliquam ut. Tristique nulla aliquet enim tortor at auctor. Lacus vel facilisis volutpat est velit. Nam at lectus urna duis convallis convallis. Tempus iaculis urna id volutpat lacus laoreet non. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Cursus mattis molestie a iaculis at erat pellentesque. Sagittis vitae et leo duis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Dinosaur</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Enjoy reading about dinosaurs.
          </CardSubtitle>
        </CardBody>
        <img width="200 px" src="/images/dinosaur.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar proin gravida hendrerit lectus a. Aliquet enim tortor at auctor urna nunc id. Purus sit amet volutpat consequat mauris nunc congue. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Id semper risus in hendrerit gravida rutrum quisque non tellus. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ultricies mi eget mauris pharetra et. Fusce id velit ut tortor pretium viverra suspendisse potenti. Et leo duis ut diam quam nulla porttitor massa. Eget dolor morbi non arcu risus quis. Aenean vel elit scelerisque mauris pellentesque. Aliquam sem fringilla ut morbi. Euismod lacinia at quis risus sed vulputate odio. Suscipit tellus mauris a diam maecenas sed. Faucibus purus in massa tempor nec feugiat nisl pretium. Malesuada pellentesque elit eget gravida.
          </CardText>
          <CardLink href="#">Buy</CardLink>
          <CardLink href="#">Rent</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default BodyComponent;
