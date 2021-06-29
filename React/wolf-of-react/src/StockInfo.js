import React from 'react';

function StockInfo({ symbol, latestPrice, week52High, week52Low }) {
    if (symbol) {
        return (
            <div className="quote" id={symbol}>
                <h2>{symbol}</h2>
                <dl>
                    <dt>Latest Price</dt>
                    <dd>{latestPrice}</dd>
                </dl>
                <dl>
                    <dt>52 Week High</dt>
                    <dd>{week52High}</dd>
                </dl>
                <dl>
                    <dt>52 Week Low</dt>
                    <dd>{week52Low}</dd>
                </dl>
            </div>
        )
    } else {
        return <em>Loading&hellip;</em>;
    }
}

export default StockInfo;