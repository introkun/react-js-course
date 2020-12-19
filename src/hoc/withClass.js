import React from 'react'

const withClass = (Component, className) => {
    return props =>
        <section className={className}>
            <Component {...props} />
        </section>
}

export default withClass