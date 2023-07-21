// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
const CustomImage = (props) => (<img {...props} />);

const content = [
  <h2 key="1">Some heading</h2>,
  <p key="2">A paragraph</p>,
  <CustomImage key="3" alt="an Image component" />,
  <p key="4">A paragraph</p>,
  <p key="5">Another paragraph</p>
];

const injectionLogic = (arr, targets) => {
  const makeReducer = (condition, injection) => (acc, item, i) => {
    if (condition(item)) {
      acc.push(injection(i));
    }
    acc.push(item);
    return acc;
  }

  const conditionNodeType = (node) => {
    const name = typeof node.type === 'string' 
      ? node.type 
      : node.type.name;

    return targets.includes(name);
  };
  const injectAd = (i) => <div key={i} id={`ad-injection-${i}`} className="ad-injection">Advertisement</div>;

  const reducer = makeReducer(conditionNodeType, injectAd);
  return arr.reduce(reducer, []);
}


export const ExampleContentWithInjection = ({safeInjection}) => {
  if (safeInjection) {
    return <>{injectionLogic(content, ['p', CustomImage.name])}</>
  } else {
    return <>{injectionLogic(content, ['p', 'CustomImage'])}</>
  }
}