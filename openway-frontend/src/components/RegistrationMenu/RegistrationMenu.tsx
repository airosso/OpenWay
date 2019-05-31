import * as React from "react";
import { useState } from "react";

import { CheckBox } from "../Checkbox/Checkbox";
import { Comment } from "../Comment/Comment";
import { ErrorContext, ErrorWrapper } from "../ErrorWrapper/ErrorWrapper";
import { InputField } from "../InputField/InputField";
import style from "./RegistrationMenu.module.css";
import { FieldError, submit, interestsCheckboxes } from "./RegistrationMenuTs";
import {sendData} from "../Login/LoginTs";

export const RegistrationMenu = () => {
    const [name, setName] = useState("Name");
    const [surname, setSurname] = useState("SurName");
    const [email, setEmail] = useState("vlad9931");
    const [date, setDate] = useState("1999");
    const [university, setUniversity] = useState("ITMO");
    const [faculty, setFaculty] = useState("fak");
    const [department, setDepartment] = useState("cock");
    const [admission, setAdmission] = useState("adm?");
    const [english, setEnglish] = useState("no");
    const [other, setOther] = useState("????");
    const [knowledge, setKnowledge] = useState("sdfsdf");
    const [experience, setExperience] = useState("sdfdd");
    const [inform, setInform] = useState("sdfsfd");
    const [interests, setInterests] = useState<string[]>([]);
    const [errors, setErrors] = useState<FieldError[]>([]);
    const [agreement, setAgreement] = useState(false);

    const [alertVisible, setAlert] = useState(false);
    const [alertRedVisible, setAlertRed] = useState(false);

    const submitData = () => {
        const dd = {
            name, surname, email, date, university,
            faculty, department, admission, english, agreement,
            other, knowledge, experience, inform, interests
        };
        const result = submit(dd);
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
            sendData(dd).then((x) => {
                console.log(x);
                setAlert(true);
                setTimeout(() => setAlert(false), 6000)
            }).catch(x => {
                alert("Произошла ошибка: " + x)
            })
        } else {
            setAlertRed(true);
            setTimeout(() => setAlertRed(false), 6000);
        }
    };

    const updateCheckbox = (name: string) => {
        const current = interests.includes(name);
        if (current) {
            setInterests(interests.filter(x => x !== name));
        } else {
            setInterests([...interests, name])
        }
    };
    const checkboxes = interestsCheckboxes.map(({name, key}) => (
        <CheckBox key={key} name={name} setValue={updateCheckbox} value={interests.includes(name)}/>));


    return (
        <ErrorContext.Provider value={errors}>
            <div className={style.menu}>
                <div className={style.alert} style={{ opacity: alertVisible ? 1 : 0 }}>
                    Ваша заявка отправлена
                </div>
                <div className={style.alertRed} style={{ opacity: alertRedVisible ? 1 : 0 }}>
                    Не все поля заполнены верно
                </div>
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
