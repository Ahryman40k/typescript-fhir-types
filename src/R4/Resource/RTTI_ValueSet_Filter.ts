
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { createEnumType } from '../../EnumType';

export enum ValueSet_FilterOpKind {
    equal = '=',
    isA = 'is-a',
    descendentOf = 'descendent-of',
    isNotA = 'is-not-a',
    regex = 'regex',
    in = 'in',
    notIn = 'not-in',
    generalizes = 'generalizes',
    exists = 'exists'
}
/*
const ValueSet_FilterOpKindKeys = t.keyof({
    [ValueSet_FilterOpKind.equal]: null,
    [ValueSet_FilterOpKind.isA]: null,
    [ValueSet_FilterOpKind.descendentOf]: null,
    [ValueSet_FilterOpKind.isNotA]: null,
    [ValueSet_FilterOpKind.regex]: null,
    [ValueSet_FilterOpKind.in]: null,
    [ValueSet_FilterOpKind.notIn]: null,
    [ValueSet_FilterOpKind.generalizes]: null,
    [ValueSet_FilterOpKind.exists]: null
});
*/

export interface IValueSet_Filter {


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
     * A code that identifies a property defined in the code system.
     */
    property?: string;


    /**
     * Extensions for property
     */
    _property?: IElement;


    /**
     * The kind of operation to perform as a part of the filter criteria.
     */
    op?: ValueSet_FilterOpKind;


    /**
     * Extensions for op
     */
    _op?: IElement;


    /**
     * The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value when the operation is 'regex', or one of the values (true and false), when the operation is 'exists'.
     */
    value?: string;


    /**
     * Extensions for value
     */
    _value?: IElement;

}



export const RTTI_ValueSet_Filter: t.Type<IValueSet_Filter> = t.recursion('IValueSet_Filter', () =>

    t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        property: t.string,
        _property: RTTI_Element,
        op: createEnumType<ValueSet_FilterOpKind>(ValueSet_FilterOpKind, 'ValueSet_FilterOpKind'),
        _op: RTTI_Element,
        value: t.string,
        _value: RTTI_Element
    })

);


