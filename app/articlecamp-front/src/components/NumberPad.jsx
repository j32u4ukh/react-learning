import { useContext } from 'react';
import context from "../context";
import Button from './Button';
import Styles from './number-pad.module.css';

export default function NumberPad(){
    const { input, setInput, result, setResult } = useContext(context);

    return (
        <section className={Styles.numberPad}>
            <Button value="7"/>
            <Button value="8"/>
            <Button value="9"/>
            <Button value="/"/>
            <Button value="AC"/>
            <Button value="4"/>
            <Button value="5"/>
            <Button value="6"/>
            <Button value="*"/>
            <Button value="⬅"/>
            <Button value="1"/>
            <Button value="2"/>
            <Button value="3"/>
            <Button value="-"/>
            <Button />
            <Button />
            <Button value="0"/>
            <Button />
            <Button value="+"/>
            <Button value="="/>
        </section>
    )
}