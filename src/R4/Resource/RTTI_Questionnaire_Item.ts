
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Coding, ICoding } from './RTTI_Coding';
import { RTTI_Questionnaire_EnableWhen, IQuestionnaire_EnableWhen } from './RTTI_Questionnaire_EnableWhen';
import { RTTI_Questionnaire_AnswerOption, IQuestionnaire_AnswerOption } from './RTTI_Questionnaire_AnswerOption';
import { RTTI_Questionnaire_Initial, IQuestionnaire_Initial } from './RTTI_Questionnaire_Initial';
import { createEnumType } from '../../EnumType';

export enum Questionnaire_ItemTypeKind {
        group = 'group',
        display = 'display',
        boolean = 'boolean',
        decimal = 'decimal',
        integer = 'integer',
        date = 'date',
        dateTime = 'dateTime',
        time = 'time',
        string = 'string',
        text = 'text',
        url = 'url',
        choice = 'choice',
        openChoice = 'open-choice',
        attachment = 'attachment',
        reference = 'reference',
        quantity = 'quantity'
}
export enum Questionnaire_ItemEnableBehaviorKind {
        all = 'all',
        any = 'any'
}
/*
const Questionnaire_ItemTypeKindKeys = t.keyof({
        [Questionnaire_ItemTypeKind.group]: null,
        [Questionnaire_ItemTypeKind.display]: null,
        [Questionnaire_ItemTypeKind.boolean]: null,
        [Questionnaire_ItemTypeKind.decimal]: null,
        [Questionnaire_ItemTypeKind.integer]: null,
        [Questionnaire_ItemTypeKind.date]: null,
        [Questionnaire_ItemTypeKind.dateTime]: null,
        [Questionnaire_ItemTypeKind.time]: null,
        [Questionnaire_ItemTypeKind.string]: null,
        [Questionnaire_ItemTypeKind.text]: null,
        [Questionnaire_ItemTypeKind.url]: null,
        [Questionnaire_ItemTypeKind.choice]: null,
        [Questionnaire_ItemTypeKind.openChoice]: null,
        [Questionnaire_ItemTypeKind.attachment]: null,
        [Questionnaire_ItemTypeKind.reference]: null,
        [Questionnaire_ItemTypeKind.quantity]: null
});
const Questionnaire_ItemEnableBehaviorKindKeys = t.keyof({
        [Questionnaire_ItemEnableBehaviorKind.all]: null,
        [Questionnaire_ItemEnableBehaviorKind.any]: null
});*/


export interface IQuestionnaire_Item {


        /**
         * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
         */
        id?: string;


        /**
         * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
         */
        extension?: IExtension[];


        /**
         * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
         */
        modifierExtension?: IExtension[];


        /**
         * An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
         */
        linkId?: string;


        /**
         * Extensions for linkId
         */
        _linkId?: IElement;


        /**
         * This element is a URI that refers to an [[[ElementDefinition]]] that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:

* code (ElementDefinition.code) 
* type (ElementDefinition.type) 
* required (ElementDefinition.min) 
* repeats (ElementDefinition.max) 
* maxLength (ElementDefinition.maxLength) 
* answerValueSet (ElementDefinition.binding)
* options (ElementDefinition.binding).
         */
        definition?: string;


        /**
         * Extensions for definition
         */
        _definition?: IElement;


        /**
         * A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
         */
        code?: ICoding[];


        /**
         * A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
         */
        prefix?: string;


        /**
         * Extensions for prefix
         */
        _prefix?: IElement;


        /**
         * The name of a section, the text of a question or text content for a display item.
         */
        text?: string;


        /**
         * Extensions for text
         */
        _text?: IElement;


        /**
         * The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
         */
        type?: Questionnaire_ItemTypeKind;


        /**
         * Extensions for type
         */
        _type?: IElement;


        /**
         * A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
         */
        enableWhen?: IQuestionnaire_EnableWhen[];


        /**
         * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
         */
        enableBehavior?: Questionnaire_ItemEnableBehaviorKind;


        /**
         * Extensions for enableBehavior
         */
        _enableBehavior?: IElement;


        /**
         * An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
         */
        required?: boolean;


        /**
         * Extensions for required
         */
        _required?: IElement;


        /**
         * An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.
         */
        repeats?: boolean;


        /**
         * Extensions for repeats
         */
        _repeats?: IElement;


        /**
         * An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
         */
        readOnly?: boolean;


        /**
         * Extensions for readOnly
         */
        _readOnly?: IElement;


        /**
         * The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse.
         */
        maxLength?: number;


        /**
         * Extensions for maxLength
         */
        _maxLength?: IElement;


        /**
         * A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question.
         */
        answerValueSet?: string;


        /**
         * One of the permitted answers for a "choice" or "open-choice" question.
         */
        answerOption?: IQuestionnaire_AnswerOption[];


        /**
         * One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
         */
        initial?: IQuestionnaire_Initial[];


        /**
         * Text, questions and other groups to be nested beneath a question or group.
         */
        item?: IQuestionnaire_Item[];

}



export const RTTI_Questionnaire_Item: t.Type<IQuestionnaire_Item> = t.recursion('IQuestionnaire_Item', () =>

        t.partial({
                id: t.string,
                extension: t.array(RTTI_Extension),
                modifierExtension: t.array(RTTI_Extension),
                linkId: t.string,
                _linkId: RTTI_Element,
                definition: t.string,
                _definition: RTTI_Element,
                code: t.array(RTTI_Coding),
                prefix: t.string,
                _prefix: RTTI_Element,
                text: t.string,
                _text: RTTI_Element,
                type: createEnumType<Questionnaire_ItemTypeKind>(Questionnaire_ItemTypeKind,'Questionnaire_ItemTypeKind'),
                _type: RTTI_Element,
                enableWhen: t.array(RTTI_Questionnaire_EnableWhen),
                enableBehavior: createEnumType<Questionnaire_ItemEnableBehaviorKind>(Questionnaire_ItemEnableBehaviorKind, 'Questionnaire_ItemEnableBehaviorKind'),
                _enableBehavior: RTTI_Element,
                required: t.boolean,
                _required: RTTI_Element,
                repeats: t.boolean,
                _repeats: RTTI_Element,
                readOnly: t.boolean,
                _readOnly: RTTI_Element,
                maxLength: t.number,
                _maxLength: RTTI_Element,
                answerValueSet: t.string,
                answerOption: t.array(RTTI_Questionnaire_AnswerOption),
                initial: t.array(RTTI_Questionnaire_Initial),
                item: t.array(RTTI_Questionnaire_Item)
        })

);


