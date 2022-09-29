import React, { Component } from "react";
import { gsap } from "gsap";
import { createRef } from 'react';

export class Card extends Component {
    titleE1 = createRef();
    contentE1 = createRef();
    isSpecialE1 = createRef();
    dateCreatedE1 = createRef();
    categoriesE1 = createRef();

    componentDidMount() {
        let title = this.titleE1.current;
        let content = this.contentE1.current;
        let isSpecial = this.isSpecialE1.current;
        let dateCreated = this.dateCreatedE1.current;
        let categories = this.categoriesE1.current;

        let timeline = gsap.timeline();

        let titleTransition = gsap.fromTo(title, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: 'easeInOut',
            duration: 1,
        });
        timeline.add(titleTransition);

        let contentTransition = gsap.fromTo(content, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: 'easeInOut',
            duration: 1,
        });
        timeline.add(contentTransition);

        let isSpecialTransition = gsap.fromTo(isSpecial, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: 'easeInOut',
            duration: 1,
        });
        timeline.add(isSpecialTransition);

        let dateCreatedTransition = gsap.fromTo(dateCreated, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: 'easeInOut',
            duration: 1,
        });
        timeline.add(dateCreatedTransition);

        let categoriesTransition = gsap.fromTo(categories, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            ease: 'easeInOut',
            duration: 1,
        });
        timeline.add(categoriesTransition);
    }

    render() {
        let { item } = this.props;
        return (
            <div className='Main__Cards' key={item.id}>
                <h1 className='Main__h1' ref={this.titleE1}>{item.title}</h1>
                <h2 className='Main__h2' ref={this.contentE1} dangerouslySetInnerHTML={{ __html: item.content }} />
                <div className='Main__isSpecial' ref={this.isSpecialE1}>{item.isSpecial ? "Special" : ""}</div>
                <date className='Main__Date' ref={this.dateCreatedE1}>{item.dateCreated.slice(0, 19)}</date>
                <div className='Main__Categories' ref={this.categoriesE1}>{item.categories.map((cat) => (
                    <div key={cat.id}>
                        <div>{cat.id}</div>
                        <p>{cat.name}</p>
                    </div>
                ))}</div>
                {item.link && <a className='Main__Link' href={item.link}>{item.link}</a>}
                {item.photo && <img className='Main__Img' alt='' src={item.photo} />}
                {item.author && <h4 className='Main__Author'>{item.author}</h4>}
            </div>
        )
    }
}
Card.propTypes = {};
Card.defaultProps = {};