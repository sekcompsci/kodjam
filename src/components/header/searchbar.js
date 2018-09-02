import React from 'react';
import {Input, Icon} from 'antd';
import {Link} from 'react-router-dom';

const Search = Input.Search;

const Complete = () => {
    return (
        <div className="head">
            <Search
                placeholder="search"
                onSearch={value => console.log(value)}
                style={{width: 200}}
                enterButton={<Link to='/search'><Icon type="search" /></Link>}
            />
        </div>
    );
};

export default Complete