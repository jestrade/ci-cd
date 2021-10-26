import {screen} from '@testing-library/testcafe'

fixture `App`
    .page `http://localhost:3000`;

test('App', async t => {
    await t.expect(screen.getByRole('heading', {
            name: /hello world/i
        }).exists).ok();

    await t.expect(screen.queryByRole('heading', {
            name: /my title/i
        }).exists).notOk();

    await t.expect(screen.getByRole('list').exists).ok()

    await t.expect(screen.getAllByRole('listitem').count).eql(2);
});