# Skripta sada dohvaća samo ime turističke zajednice i e-mail adresu.
# Nedostajući e-mail se upisuje kao 'nema podataka'

try:
    import requests
    from bs4 import BeautifulSoup
    import pandas as pd
except ImportError as e:
    print("⚠️ Nedostaje modul:", e.name)
    print("Provjeri da koristiš isti Python interpreter gdje su paketi instalirani.")
    exit(1)

import time

BASE_TEMPLATE = "https://www.htz.hr/hr-HR/opce-informacije/turisticke-zajednice?page={}"

results = []

for page in range(0, 15):  # stranice 0 do 14
    url = BASE_TEMPLATE.format(page)
    print(f"Obrađujem stranicu {page}: {url}")
    try:
        resp = requests.get(url, timeout=10)
        soup = BeautifulSoup(resp.text, "html.parser")
        links = soup.select(".view-content a")
    except Exception as e:
        print(f"❌ Ne mogu dohvatiti stranicu {url}: {e}")
        continue

    for link in links:
        name = link.get_text(strip=True)
        href = link.get("href")
        if not href.startswith("http"):
            href = "https://www.htz.hr" + href

        try:
            sub_resp = requests.get(href, timeout=10)
            sub_soup = BeautifulSoup(sub_resp.text, "html.parser")
            email_tag = sub_soup.select_one("a[href^=mailto]")
            email = email_tag.get_text(strip=True) if email_tag else 'nema podataka'

            results.append({
                "Naziv": name,
                "Email": email
            })
            time.sleep(1)
        except Exception as e:
            print(f"⚠️ Greška za {name} na stranici {page}: {e}")
            results.append({
                "Naziv": name,
                "Email": 'nema podataka'
            })

# Pretvori u DataFrame i spremi

df = pd.DataFrame(results)
df.to_excel("turisticke_zajednice.xlsx", index=False)

print("Gotovo! Spremljeno u turisticke_zajednice.xlsx")
