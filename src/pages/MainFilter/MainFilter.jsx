import React, { useState } from 'react';
import "./main_filter.scss";
import Cards from "./Cards/Cards";
import catalog from "./dataCatalog.json";
import About from "../../components/Layout/About/About";
import { searchFilter } from "./searchHelper";

export default function MainFilter() {
    const [filteredCatalog, setFilteredCatalog] = useState(catalog);
    const [visibleCount, setVisibleCount] = useState(3);
    
    const [brand, setBrand] = useState({ show: false, value: null });
    const [price, setPrice] = useState({ show: false, value: null });
    const [forWho, setForWho] = useState({ show: false, value: null });
    const [collection, setCollection] = useState({ show: false, value: null });
    const [season, setSeason] = useState({ show: false, value: null });

    function setValue(updateValue, value, event) {
        updateValue(prev => ({ ...prev, value: value, show: false }));
        event.stopPropagation();
    }

    function filterCatalog() {
        const filters = {
            brand: brand.value || null,
            price: price.value || null,
            forWho: forWho.value || null,
            collection: collection.value || null,
            season: season.value || null
        };
        const result = searchFilter(catalog, filters);
        setFilteredCatalog(result || []);
        setVisibleCount(3);
    }

    function clearFilter() {
        setFilteredCatalog(catalog);
        setBrand({ show: false, value: null });
        setPrice({ show: false, value: null });
        setForWho({ show: false, value: null });
        setCollection({ show: false, value: null });
        setSeason({ show: false, value: null });
        setVisibleCount(3);
    }

    function activeElement(string1, string2) {
        return string1 === string2;
    }


    function loadMore() {
        setVisibleCount(prev => prev + 3);
    }

    return (
        <div className="container">
            <div className="filter">

                <div className="brand" onClick={() => setBrand(prev => ({ ...prev, show: !prev.show }))}>
                    <div className="brand_selector">{brand.value || 'Бренд'}</div>
                    {brand.show && (
                        <div className="brand_options">
                            <option className={`${activeElement(brand.value, "Van Cleef & Arpels")}`} onClick={event => setValue(setBrand, 'Van Cleef & Arpels', event)}>Van Cleef & Arpels</option>
                            <option className={`${activeElement(brand.value, "Cartier")}`} onClick={event => setValue(setBrand, 'Cartier', event)}>Cartier</option>
                            <option className={`${activeElement(brand.value, "Boucheron")}`}  onClick={event => setValue(setBrand, 'Boucheron', event)}>Boucheron</option>
                            <option className={`${activeElement(brand.value, "de Grisogono")}`}  onClick={event => setValue(setBrand, 'de Grisogono', event)}>de Grisogono</option>
                        </div>
                    )}
                </div>
                
                <div className="price" onClick={() => setPrice(prev => ({...prev, show: !prev.show}))}>
                    <div className="price_selector">{price.value || 'Цена'}</div>
                    {price.show && (
                        <div className="price_options">
                            <option className={`${activeElement(price.value, "100$")}`}  onClick={event => setValue(setPrice, '100$', event)}>100-500$</option>
                            <option className={`${activeElement(price.value, "500$")}`}  onClick={event => setValue(setPrice, '500$', event)}>500-1000$</option>
                            <option className={`${activeElement(price.value, "1000$")}`}  onClick={event => setValue(setPrice, '1000$', event)}>1000-1500$</option>
                            <option className={`${activeElement(price.value, "1500$")}`}  onClick={event => setValue(setPrice, '1500$', event)}>1500$ +</option>
                        </div>
                    )}
                </div>

                <div className="for" onClick={() => setForWho(prev => ({...prev, show: !prev.show}))}>
                    <div className="for_selector">{forWho.value || 'Для кого'}</div>
                    {forWho.show && (
                        <div className="for_options">
                            <option className={`${activeElement(forWho.value, "Для мужа")}`} onClick={event => setValue(setForWho, 'Для мужа', event)}>Для мужа</option>
                            <option className={`${activeElement(forWho.value, "Для жены")}`} onClick={event => setValue(setForWho, 'Для жены', event)}>Для жены</option>
                            <option className={`${activeElement(forWho.value, "Для подруги")}`} onClick={event => setValue(setForWho, 'Для подруги', event)}>Для подруги</option>
                            <option className={`${activeElement(forWho.value, "Для друга")}`} onClick={event => setValue(setForWho, 'Для друга', event)}>Для друга</option>
                            <option className={`${activeElement(forWho.value, "Для мамы")}`} onClick={event => setValue(setForWho, 'Для мамы', event)}>Для мамы</option>
                            <option className={`${activeElement(forWho.value, "Для отца")}`} onClick={event => setValue(setForWho, 'Для отца', event)}>Для отца</option>
                        </div>
                    )}
                </div>

                
                <div className="collection" onClick={() => setCollection(prev => ({...prev, show: !prev.show}))}>
                    <div className="collection_selector">{collection.value || 'Коллекция'}</div>
                    {collection.show && ( <div className="collection_options">
                        <option className={`${activeElement(collection.value, "Подвески")}`} onClick={event => setValue(setCollection, 'Подвески', event)}>Подвески</option>
                        <option className={`${activeElement(collection.value, "Кольца")}`} onClick={event => setValue(setCollection, 'Кольца', event)}>Кольца</option>
                        <option className={`${activeElement(collection.value, "Ожерелья")}`} onClick={event => setValue(setCollection, 'Ожерелья', event)}>Ожерелья</option>
                    </div>
                    )}
                </div>

                <div className="season" onClick={() => setSeason(prev => ({...prev, show: !prev.show}))}>
                    <div className="season_selector">{season.value ||'Сезон'}</div>
                    {season.show && ( <div className="season_options">
                        <option className={`${activeElement(season.value, "Весенняя свежесть")}`} onClick={event => setValue(setSeason, 'Весенняя свежесть', event)}>Весенняя свежесть</option>
                        <option className={`${activeElement(season.value, "Летний блеск")}`} onClick={event => setValue(setSeason, 'Летний блеск', event)}>Летний блеск</option>
                        <option className={`${activeElement(season.value, "Осенняя теплотa")}`} onClick={event => setValue(setSeason, 'Осенняя теплотa', event)}>Осенняя теплотa</option>
                        <option className={`${activeElement(season.value, "Зимняя сказка")}`} onClick={event => setValue(setSeason, 'Зимняя сказка', event)}>Зимняя сказка</option>
                        <option className={`${activeElement(season.value, "Фестивальная магия")}`} onClick={event => setValue(setSeason, 'Фестивальная магия', event)}>Фестивальная магия</option>
                    </div>
                    )}
                </div>    
            </div>

            <div className="btns">
                <button onClick={filterCatalog} className="search">Поиск</button>
                <button onClick={clearFilter} className="clear">Очистить</button>
            </div>

            <div className="cards_filter">
                {filteredCatalog.length > 0 ? (
                    filteredCatalog.slice(0, visibleCount).map(item => (
                        <Cards key={item.id} data={item} />
                    ))
                ) : (
                    <h3>Ничего не найдено :(</h3>
                )}
            </div>
            
            {visibleCount < filteredCatalog.length && (
                <button className="btn" onClick={loadMore}>ПОКАЖИТЕ ЕЩЁ</button>
            )}
            <About />
        </div>
    );
}


