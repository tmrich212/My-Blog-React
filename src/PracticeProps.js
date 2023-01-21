const PracticeProps = ( {practice, encourage} ) => {

    return ( 
        <div className="practiceProp">
            <h2>{ practice }</h2>
            <p>{ encourage }</p>
        </div>
     );
}
 
export default PracticeProps;