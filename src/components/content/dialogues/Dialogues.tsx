import React from 'react';
import styles from './Dialogues.module.css';
import DialogueReplyField from "./DialoguesReply";
import {ActionDialogueTypes} from "../../../data/new_dialogue_reducer";
import {ActionTypes} from "../../../data/state";

type DialogueNameType = {
    id: string
    name: string
}
const DialogueName = (props: DialogueNameType) => {
    return <div>
        <li>
            <p className={styles.name}>{props.name}</p>
        </li>
    </div>
}
type DialoguePropsType = {
    message: string
}
const Dialogue = (props: DialoguePropsType) => {
    return <div className={styles.bubble}>
        <p className={styles.dialogueText}>{props.message}</p>
    </div>
}

type DialoguesPropsType = {
    dialogues: Array<{ id: string, name: string }>,
    dialogueMessages: Array<{ id: string, text: string }>,
    newDialogueMessage: string,
    replyMessages: { id: string, text: string }[],
    getEnteredText: (text: string)=>void
    addDialogueMessage: ()=>void

    // dispatch: (action: ActionTypes) => void
}

const Dialogues = (props: DialoguesPropsType) => {
    let dialogueNameElements = props.dialogues.map(n => <DialogueName id={n.id} name={n.name}/>);
    let dialogueContentElements = props.dialogueMessages.map(d => <Dialogue message={d.text}/>);


    return <div className={styles.container}>
        <div className={styles.names}>
            <ul className={styles.namesList}>
                {dialogueNameElements}
            </ul>
        </div>
        <div className={styles.dialogues}>
            {dialogueContentElements}

            <DialogueReplyField
                newDialogueMessage={props.newDialogueMessage}
                getEnteredText={props.getEnteredText}
                replyMessages={props.replyMessages}
                addDialogueMessage={ props.addDialogueMessage }
            />
        </div>
    </div>
}

export default Dialogues;