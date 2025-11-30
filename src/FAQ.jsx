import React from 'react';

const FAQ = () => {
    return (
        <div className="page-content">
            <h2>Frequently Asked Questions</h2>
            <p className="page-desc">Here are some common questions about Beermate.</p>

            <ul>
                <li>
                    <strong>How do I use Beermate?</strong>
                    <p>Simply install the app and select whatever game you want to play.</p>
                </li>
                <li>
                    <strong>Is Beermate free?</strong>
                    <p>Yes, Beermate is completely free to use.</p>
                </li>
                <li>
                    <strong>Will there be more games?</strong>
                    <p>In the future!</p>
                </li>
            </ul>

            <h3>Report a Bug</h3>
            <p>
                Found a bug or have a suggestion? Please email us at:{' '}
                <a href="mailto:jonatanwestling4@gmail.com">jonatanwestling4@gmail.com</a>
            </p>
            <hr className="divider" />
            <div className="footer">
                <div>BeerMate</div>
                <div>CardMateCompany</div>
            </div>
        </div>
    );
};

export default FAQ;
