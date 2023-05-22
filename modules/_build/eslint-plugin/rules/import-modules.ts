import * as fs from 'fs';
import * as path from 'path';

import type { Rule } from 'eslint';
import * as ESTree from 'estree';

const modulesPath = path.resolve(process.cwd(), 'modules');

const handleImportDeclaration =
    (context: Rule.RuleContext) =>
    (node: ESTree.ImportDeclaration & Rule.NodeParentExtension) => {
        const importValue = node.source.value as string;
        const atlascanImport = importValue.startsWith('@monorepo');

        if (!atlascanImport) return;

        const pattern = /@honey-([^/]+)\/([^/]+)/;
        const matches = importValue.match(pattern);
        if (matches) return;

        const moduleRelative = importValue.replace('@monorepo/', '');
        const packageFile = path.resolve(
            modulesPath,
            moduleRelative,
            'package.json'
        );
        const moduleFile = path.resolve(modulesPath, `${moduleRelative}.ts`);

        let packageName: string;
        if (fs.existsSync(packageFile)) {
            packageName = JSON.parse(
                fs.readFileSync(packageFile).toString()
            ).name;
        } else {
            const relative = path.relative(
                path.dirname(context.getFilename()),
                moduleFile
            );
            packageName = `./${relative.replace('.ts', '')}`;
        }

        context.report({
            node,
            messageId: 'invalidImport',
            data: {
                importPath: importValue,
                updatedPath: packageName
            },
            fix: (fixer) => {
                if (node.source) {
                    return fixer.replaceText(node.source, `'${packageName}'`);
                }
                return null;
            }
        });
    };

const importModules = () => {
    return {
        key: 'import-modules',
        rule: {
            meta: {
                docs: {
                    description: 'import from @monorepo-/module package'
                },
                fixable: 'code',
                schema: [],
                messages: {
                    invalidImport:
                        'Import from {{importPath}} should be replaced with {{updatedPath}}'
                }
            },
            create(context: Rule.RuleContext): Rule.RuleListener {
                return {
                    ImportDeclaration: handleImportDeclaration(context)
                };
            }
        }
    };
};

export { importModules };
