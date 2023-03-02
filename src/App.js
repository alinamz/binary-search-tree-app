import './TreeNode.css';
import React from 'react';
import Node from './model/BstNode';
import TreeNode from './TreeNode';

let root = null;

function App() {
  const [node, setNode] = React.useState(null);

  function createRandomInt(min = -100, max = 100) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function onClick(event) {
    if (event.code === 'Space') {
      let randomValue = createRandomInt();
      if (root === null) {
        root = new Node(randomValue);
      } else {
        root.add(randomValue);
      }
      setNode((data) => ({ ...data, ...root }));
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container" onkeypress={onClick}>
      <TreeNode data={node} />
    </div>
  );
}

export default App;