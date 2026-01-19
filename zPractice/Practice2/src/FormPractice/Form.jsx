import React from 'react'

const Form = () => {
  return (
    <div>
      
      <form>

        <fieldset>
          <legend>Sample Form</legend>
          <label htmlFor="datePicker">Choose Date: </label>
          <input type="date" id="datePicker" placeholder='Enter Name' />

          <br />
          <br/>

          <label htmlFor="select1">Select Your Option: </label>

          <select id='select1' >

            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> 
            <option value="option4">Option 4</option> 
            <option value="option5">Option 5</option> 
            <option value="option6">Option 6</option> 

          </select>
          <br />
          <br/>
          <button> This is the button</button>
          <br />
          <br/>
          <label htmlFor="message">Message:  </label>
          
          <textarea id="message" placeholder='Enter your message here' rows={3} cols={10}></textarea>

          <br />
          <br/>
          
            <label htmlFor="radio1">Male:</label>
            <input type="radio" id="radio1" name="gender"/>
            
            <label htmlFor="radio2">Female:</label>
            <input type="radio" id="radio2" name="gender"/>
            
            <label htmlFor="radio3">Other:</label>
            <input type="radio" id="radio3" name="gender"/>
        <br />
          <br/>
        
          
          <label htmlFor='checkbox1'>English</label>
          <input type="checkbox" id='checkbox1' name='language' />

          <label htmlFor='checkbox2'>Spanish</label>
          <input type="checkbox" id='checkbox2' name='language' />

          <label htmlFor='checkbox3'>French</label>
          <input type="checkbox" id='checkbox3' name='language' />
          <br />
          <br/>

          <label htmlFor='fileSelector1'>Upload: </label>
          <input type="file" id='fileSelector1' name='file' />

        </fieldset>

      
      </form>
    
    </div>
  )
}

export default Form