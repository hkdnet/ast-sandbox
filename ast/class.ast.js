{ type: 'Program',
  body: 
   [ { type: 'ClassDeclaration',
       id: { type: 'Identifier', name: 'Hoge' },
       superClass: null,
       body: 
        { type: 'ClassBody',
          body: 
           [ { type: 'MethodDefinition',
               key: { type: 'Identifier', name: 'constructor' },
               computed: false,
               value: 
                { type: 'FunctionExpression',
                  id: null,
                  params: [],
                  defaults: [],
                  body: 
                   { type: 'BlockStatement',
                     body: 
                      [ { type: 'ExpressionStatement',
                          expression: 
                           { type: 'AssignmentExpression',
                             operator: '=',
                             left: 
                              { type: 'MemberExpression',
                                computed: false,
                                object: { type: 'ThisExpression' },
                                property: { type: 'Identifier', name: 'fuga' } },
                             right: { type: 'Literal', value: 1, raw: '1' } } } ] },
                  generator: false,
                  expression: false },
               kind: 'constructor',
               static: false },
             { type: 'MethodDefinition',
               key: { type: 'Identifier', name: 'piyo' },
               computed: false,
               value: 
                { type: 'FunctionExpression',
                  id: null,
                  params: [],
                  defaults: [],
                  body: 
                   { type: 'BlockStatement',
                     body: 
                      [ { type: 'ReturnStatement',
                          argument: 
                           { type: 'MemberExpression',
                             computed: false,
                             object: { type: 'ThisExpression' },
                             property: { type: 'Identifier', name: 'piyo' } } } ] },
                  generator: false,
                  expression: false },
               kind: 'method',
               static: false },
             { type: 'MethodDefinition',
               key: { type: 'Identifier', name: 'poyo' },
               computed: false,
               value: 
                { type: 'FunctionExpression',
                  id: null,
                  params: [],
                  defaults: [],
                  body: 
                   { type: 'BlockStatement',
                     body: 
                      [ { type: 'ReturnStatement',
                          argument: { type: 'Literal', value: 1, raw: '1' } } ] },
                  generator: false,
                  expression: false },
               kind: 'get',
               static: false },
             { type: 'MethodDefinition',
               key: { type: 'Identifier', name: 'poyo' },
               computed: false,
               value: 
                { type: 'FunctionExpression',
                  id: null,
                  params: [ { type: 'Identifier', name: 'value' } ],
                  defaults: [],
                  body: 
                   { type: 'BlockStatement',
                     body: 
                      [ { type: 'ExpressionStatement',
                          expression: 
                           { type: 'AssignmentExpression',
                             operator: '=',
                             left: 
                              { type: 'MemberExpression',
                                computed: false,
                                object: { type: 'ThisExpression' },
                                property: { type: 'Identifier', name: 'poyo' } },
                             right: { type: 'Identifier', name: 'value' } } } ] },
                  generator: false,
                  expression: false },
               kind: 'set',
               static: false } ] } },
     { type: 'ExpressionStatement',
       expression: 
        { type: 'AssignmentExpression',
          operator: '=',
          left: 
           { type: 'MemberExpression',
             computed: false,
             object: { type: 'Identifier', name: 'module' },
             property: { type: 'Identifier', name: 'exports' } },
          right: { type: 'Identifier', name: 'Hoge' } } } ],
  sourceType: 'script' }