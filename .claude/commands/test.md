# Test Generator

Generate comprehensive test cases with edge cases and failure scenarios.

## Arguments

`$ARGUMENTS` - Target file/function to test (e.g., `src/auth/login.ts` or `calculateTotal`)

## Instructions

1. **Analyze target**
   - Read `$ARGUMENTS` file/function or ask user what to test
   - Detect test framework from `package.json` (Jest, Vitest, Mocha)
   - Understand: parameters, return types, dependencies, business logic, error handling

2. **Generate test scenarios**
   - **Happy path:** Valid inputs, standard use cases
   - **Edge cases:** Boundary values (0, -1, max), empty/null/undefined, large inputs, special chars
   - **Failures:** Invalid types, missing params, out of range, malformed data, network errors, race conditions
   - **Security:** SQL injection, XSS, unauthorized access
   - **Errors:** Expected exceptions, error messages, graceful degradation

3. **Create test file**
   - Follow project conventions (`__tests__/`, `.test.ts`, `.spec.ts`)
   - Structure with describe/it blocks:

     ```javascript
     describe('FunctionName', () => {
       describe('Happy Path', () => { ... })
       describe('Edge Cases', () => { ... })
       describe('Error Handling', () => { ... })
       describe('Security', () => { ... })
     })
     ```

   - Mock external dependencies
   - Add setup/teardown (beforeEach, afterEach)
   - Use clear, descriptive test names

4. **Output**
   - Complete test file ready to run
   - Show coverage gaps and suggest additional scenarios

## Test Coverage Checklist

- Valid inputs & expected outputs
- Invalid types (string vs number)
- Null/undefined/empty values
- Boundary values (min/max/zero/negative)
- Async failures (timeouts, rejections)
- Error messages accuracy
- Security vulnerabilities
