import React from 'react';
import { ClockLoader } from 'react-spinners';

const Circular = () => {
    return (
        <div>

            {/* Use BarLoader as a spinner */}
            <ClockLoader className='mx-auto' color="black" loading={true} height={4} width={150} />


            {/* Additional content or components */}
        </div>
    );
};

export default Circular;