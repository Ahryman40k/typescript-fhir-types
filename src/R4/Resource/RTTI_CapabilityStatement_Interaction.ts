
import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Element, IElement } from './RTTI_Element';
import { createEnumType } from '../../EnumType'

export enum CapabilityStatement_InteractionCodeKind {
        read = 'read',
        vread = 'vread',
        update = 'update',
        patch = 'patch',
        delete = 'delete',
        historyInstance = 'history-instance',
        historyType = 'history-type',
        create = 'create',
        searchType = 'search-type'
}/*
const CapabilityStatement_InteractionCodeKindKeys = t.keyof({
        [CapabilityStatement_InteractionCodeKind.read]: null,
        [CapabilityStatement_InteractionCodeKind.vread]: null,
        [CapabilityStatement_InteractionCodeKind.update]: null,
        [CapabilityStatement_InteractionCodeKind.patch]: null,
        [CapabilityStatement_InteractionCodeKind.delete]: null,
        [CapabilityStatement_InteractionCodeKind.historyInstance]: null,
        [CapabilityStatement_InteractionCodeKind.historyType]: null,
        [CapabilityStatement_InteractionCodeKind.create]: null,
        [CapabilityStatement_InteractionCodeKind.searchType]: null
});
*/

export interface ICapabilityStatement_Interaction {


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
         * Coded identifier of the operation, supported by the system resource.
         */
        code?: CapabilityStatement_InteractionCodeKind;


        /**
         * Extensions for code
         */
        _code?: IElement;


        /**
         * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
         */
        documentation?: string;


        /**
         * Extensions for documentation
         */
        _documentation?: IElement;

}



export const RTTI_CapabilityStatement_Interaction: t.Type<ICapabilityStatement_Interaction> = t.recursion('ICapabilityStatement_Interaction', () =>

        t.partial({
                id: t.string,
                extension: t.array(RTTI_Extension),
                modifierExtension: t.array(RTTI_Extension),
                code: createEnumType<CapabilityStatement_InteractionCodeKind>(CapabilityStatement_InteractionCodeKind, 'CapabilityStatement_InteractionCodeKind'),
                _code: RTTI_Element,
                documentation: t.string,
                _documentation: RTTI_Element
        })

);


