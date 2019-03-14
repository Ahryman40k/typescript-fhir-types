
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';

export enum AuditEvent_NetworkTypeKind {
    one = '1',
    two = '2',
    three = '3',
    four = '4',
    five = '5'
}
const AuditEvent_NetworkTypeKindKeys = t.keyof({
    [AuditEvent_NetworkTypeKind.one]: null,
    [AuditEvent_NetworkTypeKind.two]: null,
    [AuditEvent_NetworkTypeKind.three]: null,
    [AuditEvent_NetworkTypeKind.four]: null,
    [AuditEvent_NetworkTypeKind.five]: null
            });


const mandatory = t.type({

});


const partial = t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    modifierExtension: t.array(RTTI_Extension),
    address: t.string,
    _address: RTTI_Element,
    type: AuditEvent_NetworkTypeKindKeys,
    _type: RTTI_Element
});


export var RTTI_AuditEvent_Network:any = t.intersection([mandatory, partial]);


export type IAuditEvent_Network = t.TypeOf<typeof RTTI_AuditEvent_Network>;

