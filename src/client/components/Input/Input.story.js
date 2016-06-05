import { storiesOf } from '@kadira/storybook';
import StoriesWrapper from '../StoriesWrapper/StoriesWrapper';
import Input from './Input';

const defaultValue = 'Lorem ipsum, bro!';

storiesOf('Input', module)
  .addDecorator((story) =>
    <StoriesWrapper>
      {story()}
    </StoriesWrapper>
  )
  .add('type:text', () =>
    <Input type="text" />
  )
  .add('type:text hasClear filled', () =>
    <Input type="text" hasClear defaultValue={defaultValue} />
  )
  .add('type:text size:s filled', () =>
    <Input type="text" hasClear size="s" defaultValue={defaultValue} />
  )
  .add('type:text size:m filled', () =>
    <Input type="text" hasClear size="m" defaultValue={defaultValue} />
  )
  .add('type:text size:l filled', () =>
    <Input type="text" hasClear size="l" defaultValue={defaultValue} />
  )
  .add('type:text size:lg filled', () =>
    <Input type="text" hasClear size="xl" defaultValue={defaultValue} />
  )
  .add('type:text placeholder', () =>
    <Input type="text" placeholder="Some placeholder here" />
  )
  .add('type:text availableWidth', () =>
    <Input type="text" availableWidth />
  )
  .add('type:password', () =>
    <Input type="password" />
  )
  .add('type:password filled', () =>
    <Input type="password" defaultValue="passw00rd" />
  )
  .add('type:password filled availableWidth', () =>
    <Input type="password" defaultValue="passw00rd" availableWidth />
  );
