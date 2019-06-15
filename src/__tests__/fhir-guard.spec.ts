import { RTTI_Expression, IExpression, ExpressionLanguageKind } from "../R4/Resource/RTTI_Expression";
import { FHIRGuard, decode } from "../decorator/fhir-guard";

const expression: IExpression = {
    "language": ExpressionLanguageKind._textCql,
    "expression": "Age Group/Sex"
};

class MyTestClass {

    constructor() {
        this.expression = {}
    }

    @FHIRGuard()
    ProvideFhirResource(): IExpression {
        return expression;
    }

    @FHIRGuard()
    public expression: IExpression


    @FHIRGuard()
    public rawOptionalExpression?: any


}




describe('Guard', () => {

    test("Should evaluate function to check Resource", () => {
        expect( RTTI_Expression.decode( expression ) ).toBe(expression)
    });

    test("Should evaluate verify  to test property", () => {
    });

    
})
