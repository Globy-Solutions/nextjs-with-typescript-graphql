/**
 * `Simple Card Component`.
 * @param {Product} data.
 * @return {JSX.Element} Wrapper Component.
 */

import type { Product as Interface } from '@/models/product';

type Card = Interface & {
    actions: {
        add: () => {},
        info: () => {},
        remove: () => {},
    }
}

const Product = ({ id, title, price, description, category, image, rating: { rate, count }, actions }: Card): JSX.Element => (
    <div className="card">
        {/* <div className="card-image">
            <figure className="image is-4by3">
                <img src={image} alt={title} />
            </figure>
        </div> */}
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src={image} alt={category} />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">${price}</p>
                </div>
            </div>
            <div className="content">
                {description}
                <br />
                Rate <b>{rate}</b> | Count <b>{count}</b>
            </div>
        </div>
        <footer className="card-footer">
            <button className="button is-success is-light" id={id} onClick={actions.add}>Success</button>
            <button className="button is-warning is-light" id={id} onClick={actions.info}>Warning</button>
            <button className="button is-danger is-light" id={id} onClick={actions.remove}>Danger</button>
        </footer>
    </div>
)

export default Product
