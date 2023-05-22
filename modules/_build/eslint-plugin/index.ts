import { importModules } from './rules/import-modules';

const importModuleRule = importModules();

const rules = {
    [importModuleRule.key]: importModuleRule.rule
};

export { rules };
