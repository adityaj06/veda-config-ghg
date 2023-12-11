import { test as base } from '@playwright/test';
import type { TestOptions } from './uiDataTypes';


export const test = base.extend<TestOptions>({
  "logos": [
    "epa",
    "nasa",
    "nist",
    "noaa"
  ],
  "catalogs": [
    "CASA-GFED3 Land Carbon Flux",
    "Air-Sea CO₂ Flux, ECCO-Darwin Model v5",
    "EMIT Methane Point Source Plume Complexes",
    "U.S. Gridded Anthropogenic Methane Emissions Inventory",
    "GOSAT-based Top-down Total and Natural Methane Emissions",
    "Wetland Methane Emissions, LPJ-wsl Model",
    "Atmospheric Methane Concentrations from the NOAA Global Monitoring Laboratory",
    "Atmospheric Carbon Dioxide Concentrations from NOAA Global Monitoring Laboratory",
    "OCO-2 MIP Top-down CO₂ Budgets",
    "OCO-2 GEOS Column CO₂ Concentrations",
    "ODIAC Fossil Fuel CO₂ Emissions",
    "SEDAC Gridded World Population Density",
    "TM5-4DVar Isotopic CH₄ Inverse Fluxes",
  ],
});

export const expect = test.expect;