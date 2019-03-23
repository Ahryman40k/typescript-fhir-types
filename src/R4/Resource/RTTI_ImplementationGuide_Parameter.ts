
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { createEnumType } from '../../EnumType'

export enum ImplementationGuide_ParameterCodeKind {
    apply = 'apply',
    pathResource = 'path-resource',
    pathPages = 'path-pages',
    pathTxCache = 'path-tx-cache',
    expansionParameter = 'expansion-parameter',
    ruleBrokenLinks = 'rule-broken-links',
    generateXml = 'generate-xml',
    generateJson = 'generate-json',
    generateTurtle = 'generate-turtle',
    htmlTemplate = 'html-template'
}

export interface IImplementationGuide_Parameter {


    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string;


    /**
     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code?: ImplementationGuide_ParameterCodeKind;


    /**
     * Extensions for code
     */
    _code?: IElement;


    /**
     * Value for named type.
     */
    value?: string;


    /**
     * Extensions for value
     */
    _value?: IElement;

}



export const RTTI_ImplementationGuide_Parameter: t.Type<IImplementationGuide_Parameter> = t.recursion('IImplementationGuide_Parameter', () =>

    t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        code: createEnumType<ImplementationGuide_ParameterCodeKind>(ImplementationGuide_ParameterCodeKind, 'ImplementationGuide_ParameterCodeKind'),
        _code: RTTI_Element,
        value: t.string,
        _value: RTTI_Element
    })

);



