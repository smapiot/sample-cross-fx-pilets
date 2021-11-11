import { HtmlComponent, ForeignComponent } from 'sample-cross-fx';

const component: ForeignComponent<any> = {
  mount(el, { deps }, { router }) {
    el.innerHTML = `
      <h1>I am a Page</h1>
      <p>Written entirely in HTML. No framework. No library. Lazy loaded!</p>
      <p>Why? Because <b>we can</b>. Why not?</p>
      <p>The following list was lazy loaded:</p>
      <ul>
        ${deps.foo.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <p>You can even <a href="/">navigate</a>, no problemo.</p>
    `;
    el.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      router.history.push('/');
    });
  },
};

export const Page: HtmlComponent<any> = {
  component,
  type: 'html',
};
