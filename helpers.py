def fix_hour_file_header(filepath:str) -> None:
    with open(filepath, 'r', encoding='utf-8') as f:
        data = f.read()
    header = data[:1392]
    data = data[1392:]
    split_header = header.split('hours')[0][1:]
    header = 'date,station' + split_header
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(header + data)


def fix_all_hour_headers(data_dir:str) -> None:
    from pathlib import Path
    for file in Path(data_dir).glob('**/meteo_hour_*.csv'):
        fix_hour_file_header(str(file))
