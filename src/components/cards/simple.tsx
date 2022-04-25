/**
 * `Simple Card Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import { ReactNode } from 'react';

type Card = {
  title: string;
  subtitle: string;
  children?: ReactNode;
  date: string;
}

const Simple = ({title, subtitle, children, date}: Card): JSX.Element => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{subtitle}</p>
        </div>
      </div>

      <div className="content">
        {children}
        <br />
        <time dateTime={date}>{date}</time>
      </div>
    </div>
  </div>
)

export default Simple
