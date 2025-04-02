// src/components/Form.tsx
import React from 'react';

const Form: React.FC = () => {
    return (
        <form>
            <label htmlFor="feedback">Your Feedback:</label>
            <textarea id="feedback" name="feedback" rows={4} cols={50}></textarea><br/><br/>
            <button type="submit">Submit Feedback</button>
        </form>
    );
}

export default Form;
