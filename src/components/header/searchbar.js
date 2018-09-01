import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

const Complete = () => {
    return (
        <div className="head">
            <Search
                placeholder="search"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
        </div>
    );
};

export default Complete