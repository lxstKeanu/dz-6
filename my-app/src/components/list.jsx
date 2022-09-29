import React, { Component } from 'react';
import someData from './news.json';
import { Card } from './card';

export class List extends Component {
    state = {
        isSpecial: false,
        link: false,
        photo: false,
        search: '',
    };

    render() {
        const { isSpecial, link, photo, search } = this.state;
        const listToRender = someData.filter((el) => {
            if (isSpecial && el.isSpecial === false) return false;
            if (link && el.link === null) return false;
            if (photo && el.photo === null) return false;
            return !(el.title.toLowerCase().indexOf(search.toLowerCase()) < 0)
                || !(el.content.toLowerCase().indexOf(search.toLowerCase()) < 0)
                || !(el.author.toLowerCase().indexOf(search.toLowerCase()) < 0)
        });

        return (
            <div className='Main__Button__Filters'>
                <div className='Main__Filters'>
                    <label>
                        <input
                            onChange={() => this.setState({ isSpecial: !isSpecial })}
                            type="checkbox"
                            checked={isSpecial}
                        /> <span>Filter only IsSpecial</span>
                    </label>
                    <label>
                        <input
                            onChange={() => this.setState({ link: !link })}
                            type="checkbox"
                            checked={link}
                        /> <span>Filter has link</span>
                    </label>
                    <label>
                        <input
                            onChange={() => this.setState({ photo: !photo })}
                            type="checkbox"
                            checked={photo}
                        /> <span>Filter has photo</span>
                    </label>
                </div>
                {listToRender.map((item) => (
                    <Card item={item} />
                ))}
            </div>
        )
    }
}


List.propTypes = {};
List.defaultProps = {};