import * as React from "react";
import { useState } from "react";

import { CheckBox } from "../Checkbox/Checkbox";
import { Comment } from "../Comment/Comment";
import { ErrorContext, ErrorWrapper } from "../ErrorWrapper/ErrorWrapper";
import { InputField } from "../InputField/InputField";
import style from "./RegistrationMenu.module.css";
import { FieldError, submit, interestsCheckboxes } from "./RegistrationMenuTs";

export const RegistrationMenu = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [university, setUniversity] = useState("");
    const [faculty, setFaculty] = useState("");
    const [department, setDepartment] = useState("");
    const [admission, setAdmission] = useState("");
    const [english, setEnglish] = useState("");
    const [other, setOther] = useState("");
    const [knowledge, setKnowledge] = useState("");
    const [experience, setExperience] = useState("");
    const [inform, setInform] = useState("");
    const [interests, setInterests] = useState<any>({});
    const [errors, setErrors] = useState<FieldError[]>([]);
    const [agreement, setAgreement] = useState(false);

    const submitData = () => {
        const result = submit({
            name, surname, email, date, university,
            faculty, department, admission, english, agreement,
            other, knowledge, experience, inform, interests
        });
        setErrors(result);
        if (result.length === 0) {
            setName("");
            setSurname("");
            setEmail("");
            setDate("");
            setUniversity("");
            setFaculty("");
            setDepartment("");
            setAdmission("");
            setEnglish("");
            setOther("");
            setKnowledge("");
            setExperience("");
            setInform("");
            setAgreement(false);
        } else {
        }
    };

    const updateCheckbox = (name: string) => {
        const current = !!interests[name];
        const copy = {...interests};
        copy[name] = !current;
        setInterests(copy);
    };
    const checkboxes = interestsCheckboxes.map(({name, key}) => (
        <CheckBox key={key} name={name} setValue={updateCheckbox} value={!!interests[name]}/>));


    return (
        <ErrorContext.Provider value={errors}>
            <div className={style.menu}>
                <form id="regOpenWay">
                    <InputField name="Имя*: " id="name" className={style.text} type="text" value={name}
                                setValue={setName}/>
                    <InputField name="Фамилия*: " id="surname" className={style.text} type="text" value={surname}
                                setValue={setSurname}/>
                    <InputField name="E-mail*: " id="email" className={style.text} type="text" value={email}
                                setValue={setEmail}/>
                    <InputField name="Дата рождения*: " id="date" className={style.date} type="date" value={date}
                                setValue={setDate}/>
                    <InputField name="Университет*: " id="university" className={style.text} type="text"
                                value={university} setValue={setUniversity}/>
                    <InputField name="Факультет*: " id="faculty" className={style.text} type="text" value={faculty}
                                setValue={setFaculty}/>
                    <InputField name="Кафедра*: " id="department" className={style.text} type="text" value={department}
                                setValue={setDepartment}/>
                    <InputField name="Год поступления: " id="admission" className={style.text} type="text"
                                value={admission} setValue={setAdmission}/>
                    <label htmlFor="english">Ваш уровень английского: </label>
                    <select size={1} className={style.select} id="english" value={english}
                            onChange={(event) => setEnglish(event.target.value)}>
                        <option>Выберите</option>
                        <option value="elementary">Elementary</option>
                        <option value="pre-intermediate">Pre-Intermediate</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="upper intermediate">Upper Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    <p>Чем Вам было бы интересно заниматься?*</p>
                    <ErrorWrapper id={"interests"}>
                        <div>
                            {checkboxes}
                        </div>
                    </ErrorWrapper>
                    <Comment name="Другое: " id="other" value={other} setValue={setOther}/>
                    <Comment name="Ваши знания компьютерных технологий, прикладного ПО, языков программирования*: "
                             id="knowledge" value={knowledge} setValue={setKnowledge}/>
                    <Comment name="Опыт работы (если имеется): " id="experience" value={experience}
                             setValue={setExperience}/>
                    <Comment name="Откуда Вы узнали о Летней школе?: " id="inform" value={inform}
                             setValue={setInform}/>
                    <ErrorWrapper id={"agreement"}>
                        <CheckBox
                            value={agreement}
                            setValue={() => setAgreement(!agreement)}
                            key="agreement"
                            name="*Отправляя эту форму, я соглашаюсь на обработку своих персональных данных,
                     согласно политике Конфиденциальности OpenWay"/>
                    </ErrorWrapper>
                    <div className={style.submit}>
                        <input className={style.send} type="button" value="Отправить заявку!" onClick={submitData}/>
                    </div>
                </form>
            </div>
        </ErrorContext.Provider>
    );
};
