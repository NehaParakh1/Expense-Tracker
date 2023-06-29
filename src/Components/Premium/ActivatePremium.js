import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { themeActions } from '../Store/ThemeReducer';
import './ActivatePremium.css';

const ActivatePremium=()=>{
    const dispatch=useDispatch();
    const isPremium=useSelector(state=>state.theme.premium)
    const expenseList = useSelector((state) => state.expense.expenses);
  
    const email = useSelector(state=>state.auth.email);
  const emailReplace = email.replace(/@.*/, '');

const themeHandler=()=>{
dispatch(themeActions.changeTheme('dark'));
}

const closeHandler=()=>{
    dispatch(themeActions.activePremium(false));
}

const downloadHandler=()=>{
    const title = ['Category', 'Description', 'Amount'];
    const data = [title];

    expenseList.forEach((item) => {
      data.push([item.category, item.description, item.amount ,]);
    });

    const creatingCSV = data.map((row) => row.join(',')).join('\n');
    const blob = new Blob([creatingCSV]);
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${emailReplace}_expenses.csv`;
    downloadLink.click();
}

return(
        <>
        <div>
            {isPremium && <button className='theme' onClick={themeHandler}>Change Theme</button>}
            {isPremium && <button className='close' onClick={closeHandler}>Close</button>}
            {isPremium && <button className='download' onClick={downloadHandler}>Download</button>}
        </div>
        </>
    )
}

export default ActivatePremium;