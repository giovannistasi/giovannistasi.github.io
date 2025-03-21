import { useDispatch } from "react-redux";
import { AppLayout } from "@/components/desktop/apps/layout/AppLayout";
import { setActiveDesktopApp } from "@/store/desktop";

export const AppBookReader = () => {
  const dispatch = useDispatch();
  const onClose = () => dispatch(setActiveDesktopApp("DesktopMainView"));

  return (
    <AppLayout onClose={onClose} title="Book Reader">
      <div id="wrapper">
        <div id="container">
          <section className="open-book">
            <header>
              <h1>JavaScript: The First 20 Years</h1>
              <h6>Allen Wirfs-Brock</h6>
            </header>
            <article>
              <h2 className="chapter-title">JavaScript: The First 20 Years</h2>
              <p>
                In 2020, the World Wide Web is ubiquitous with over a billion websites accessible from billions of
                Web-connected devices. Each of those devices runs a Web browser or similar program which is able
                to process and display pages from those sites.
              </p>
              <p>
                The majority of those pages embed or load source
                code written in the JavaScript programming language. In 2020, JavaScript is arguably the world’s
                most broadly deployed programming language. According to a Stack Overflow survey it is used by 71.5% of professional developers making it the world’s most widely used programming
                language.
              </p>
              <p>
                This paper primarily tells the story of the creation, design, and evolution of the JavaScript
                language over the period of 1995–2015. But the story is not only about the technical details of the
                language. It is also the story of how people and organizations competed and collaborated to shape
                the JavaScript language which dominates the Web of 2020.
              </p>
              <p>
                This is a long and complicated story. To make it more approachable, this paper is divided into
                four major parts—each of which covers a major phase of JavaScript’s development and evolution.
                Between each of the parts there is a short interlude that provides context on how software developers
                were reacting to and using JavaScript.
              </p>
              <p>
                In 1995, the Web and Web browsers were new technologies bursting onto the world, and Netscape
                Communications Corporation was leading Web browser development. JavaScript was initially
                designed and implemented in May 1995 at Netscape by Brendan Eich, one of the authors of this
                paper. It was intended to be a simple, easy to use, dynamic languageg that enabled snippets of code
                to be included in the definitions of Web pages. The code snippets were interpreted by a browser as
                it rendered the page, enabling the page to dynamically customize its presentation and respond to
                user interactions.
              </p>
            </article>
            <footer>
              <ol id="page-numbers">
                <li>1</li>
                <li>2</li>
              </ol>
            </footer>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};
