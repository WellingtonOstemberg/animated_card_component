import { AnimatedBorderCard } from './components';

function App() {
  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente dignissimos ipsa voluptates neque labore quae expedita perferendis dicta accusantium laborum similique, fuga soluta maxime eius tempora cumque tenetur? Voluptatum quasi illo vero, perspiciatis maxime distinctio iste nesciunt voluptatibus dolorum delectus odit obcaecati sed repellendus consectetur ratione omnis! Vel, eum?'
  const title = 'Animated Border Card'
  return (
    <AnimatedBorderCard message={message} title={title} path='/' />
  );
}

export default App;
