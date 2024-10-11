################### Climathon 2024 #2: DWD Challenge #################################

######################################################################################
# Stündliche meteorologische Klimaprojektionen aus modellierten Tageswerten ableiten #
######################################################################################

In dieser einzigartigen Herausforderung geht es darum, Klimadatensätze für 
Anwendungen in der Ökosystemmodellierung nutzbar zu machen. Viele spezialisierte 
Modelansätze benötigen zeitlich hochaufgelöste meteorologische Eingabedatensätze, 
um konkrete Fragestellungen zu klimatischen Veränderungen adäquat zu beantworten. 
Die Klimaprojektionsergebnisse sind jedoch aus Platzgründen nur in täglicher 
Auflösung verfügbar. Daher werden eure innovativen Ideen benötigt, um realistische 
Tagesganglinien der meteorologischen Parameter aus den vorhandenen Daten zu 
rekonstruieren.

Nutzt statistische oder auch physikalisch basierte Verfahren, um an Hand von 
langjährigen Beobachtungszeitreihen für meteorologische Parameter an Wetterstationen, 
stündliche Verläufe der Parameter z. B. Lufttemperatur, Niederschlag, Luftfeuchte und 
Globalstrahlung aus Tageswerten abzuleiten. Eure Aufgabe ist es, diese Datensätze zu 
analysieren und realistische Tagesganglinien zu rekonstruieren.

##########################
# Datensatz-Beschreibung #
##########################

Der Datensatz für die Challenge enthält Messwerte von Wetterstationen in 
Deutschland aus den Jahren 2000 bis 2023. Die Daten wurden in drei Jahresdateien 
jeweils für die stündlichen Daten und die daraus abgeleiteten täglichen, 
aggregierten Werte aufgeteilt und im csv-Format abgespeichert.

	- meteo_hour_XXXX-YYYY.csv --> stündliche Daten vom Jahr XXXX bis YYYY
	- meteo_daily_XXXX-YYYY.csv --> tägliche Daten vom Jahr XXXX bis YYYY

Die täglichen Datensätze enhalten folgende Spalten:

	- date : Tag der Messung als Datum im Format YYYYmmdd
	- station : Kennung der Wetterstation
	- height : Höhe über NN
	- lat : Geographische Breite
	- lon : Geographische Länge
	- hurs : Tagesmittel der relative Luftfeuchte in %
	- sfcWind : Tagesmittel der Windgeschwindigkeit in m/s
	- clt : Tagesmittel des Bedeckungsgrades in Achteln
	- ps : Tagesmittel des Luftdrucks auf NN reduziert in hPa
	- rsds : Tagessumme der Globalstrahlung in J/cm2
	- tas : Tagesmittel der Lufttemperatur in °C
	- tasmin : Tagesminimum der Lufttemperatur in °C
	- tasmax : Tagesmaximum der Lufttemperatur in °C
	- pr: Tagessumme des Niederschlags in mm

Die stündlichen Datensätze enhalten folgende Spalten:

	- date : Tag der Messung als Datum im Format YYYYmmdd
	- station : Kennung der Wetterstation
	- clt/clt.X : Stundenwerte Bedeckungsgrad [1/8] für 0:00 Uhr + X Stunden
	- hurs/hurs.X : Stundenwerte Luftfeuchte [%] für 0:00 Uhr + X Stunden
	- pr/pr.X : Stundenwerte Niederschlags [mm] für 0:00 Uhr + X Stunden
	- ps/ps.X : Stundenwerte Luftdrucks [hPa] für 0:00 Uhr + X Stunden
	- rsds/rsds.X : Stundenwerte Globalstrahlung [J/cm2] für 0:00 Uhr + X Stunden
	- sfcWind/sfcWind.X : Stundenwerte Windgeschwindigkeit [m/s] für 0:00 Uhr + X Stunden
	- tas/tas.X : Stundenwerte Lufttemperatur [°C] für 0:00 Uhr + X Stunden

Acthung: Fehlwerte sind als leere Zellen in den csv-Dateien hinterlegt.

#############################
# Beispiel-Import in Python #
#############################

import os
import pandas as pd

datadir = "pathtodata/"

# Define start year
start = 2000
end = start + 2

# Import hourly dataset
importpath = os.path.join(datadir, f"meteo_hour_{start}-{end}.csv")
meteo_hour_df = pd.read_csv(importpath)
meteo_hour_df = meteo_hour_df.iloc[2:].rename(columns={'Unnamed: 0':'date', 'Unnamed: 1':'station'})

# Import daily dataset
importpath = os.path.join(datadir, f"meteo_daily_{start}-{end}.csv")
meteo_day_df = pd.read_csv(importpath)


################
# Viel Erfolg! #
################