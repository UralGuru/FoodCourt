import React, {useEffect} from "react";
import styles from "./location.module.scss";
import {withAuth} from "@shared/HOC";
import {useGeolocated} from "react-geolocated";

function Location() {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div className={styles.locationContent}>
            <div className={styles.location}>
                <div>Ширина</div>
                <div>{coords.latitude}</div>
            </div>
            <div className={styles.location}>
                <div>Долгота</div>
                <div>{coords.longitude}</div>
            </div>
            <div className={styles.location}>
                <div>Высота</div>
                <div>{coords.altitude}</div>
            </div>
            <div className={styles.location}>
                <div>Истинный меридиан</div>
                <div>{coords.heading}</div>
            </div>
            <div className={styles.location}>
                <div>Скорость</div>
                <div>{coords.speed}</div>
            </div>
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default withAuth(Location)