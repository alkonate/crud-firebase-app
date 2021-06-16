import { useTranslation } from "react-i18next"

export default function LocalSelect () {
    const {i18n} = useTranslation()
    const changeHandler = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (    
         <select onChange={changeHandler}>
             {
                 i18n.languages.map(lang => <option key={lang} value={lang}>{lang}</option>)
             }
        </select>
    )
}