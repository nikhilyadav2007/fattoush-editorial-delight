import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation, restaurant } from '@/data/restaurant';

export function Wordmark() {
 return <Link to="/" aria-label="Fattoush home" className="wordmark"><span className="wordmark-main">FATTOUSH</span><span className="wordmark-sub">RESTAURANT & BANQUET</span></Link>;
}
export function BrandArrival() {
 const [visible, setVisible] = useState(true);
 useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 900); return () => window.clearTimeout(timer); }, []);
 if (!visible) return null;
 return <div className="brand-arrival" aria-hidden="true"><span>FATTOUSH</span><i /></div>;
}
export function ReserveButton({ outline = false, label = 'RESERVE A TABLE' }: { outline?: boolean; label?: string }) {
 return <Button asChild variant={outline ? 'diningOutline' : 'dining'}><a href={restaurant.telephone}>{label}<ArrowUpRight /></a></Button>;
}
export function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);
 const pathname = useRouterState({ select: s => s.location.pathname });
 useEffect(() => { const update = () => setScrolled(window.scrollY > 25 || pathname !== '/'); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, [pathname]);
 useEffect(() => { setOpen(false); }, [pathname]);
 return <><a href="#main-content" className="skip-link">Skip to content</a><header className={`site-nav ${scrolled ? 'scrolled' : ''}`}><Wordmark /><div className="nav-right"><nav className="nav-links" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} className={`nav-link ${pathname === item.to ? 'active' : ''}`}>{item.name}</Link>)}</nav><ReserveButton /><Dialog.Root open={open} onOpenChange={setOpen}><Dialog.Trigger asChild><Button variant="diningIcon" className="mobile-toggle" aria-label="Open navigation"><Menu /></Button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay /><Dialog.Content className="mobile-menu"><div className="mobile-menu-top"><Wordmark /><Dialog.Close asChild><Button variant="diningIcon" aria-label="Close navigation"><X /></Button></Dialog.Close></div><Dialog.Title className="sr-only">Navigation</Dialog.Title><Dialog.Description className="sr-only">Explore Fattoush Restaurant and Banquet</Dialog.Description><nav className="mobile-menu-links" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.name}</Link>)}</nav><ReserveButton /><p className="mobile-menu-contact">Sholinganallur, Chennai · {restaurant.phone}</p></Dialog.Content></Dialog.Portal></Dialog.Root></div></header></>;
}
export function Footer() {
 return <footer className="footer"><div className="footer-top"><div className="footer-brand"><Wordmark /><p className="footer-tagline">Middle Eastern flavours.<br />Memorable moments.</p></div><div><h3>EXPLORE FATTOUSH</h3><nav className="footer-links" aria-label="Footer navigation">{navigation.map(item => <Link to={item.to} key={item.to}>{item.name}</Link>)}</nav></div><div className="footer-contact"><h3>COME, GATHER WITH US</h3><a href={restaurant.telephone}>{restaurant.phone}</a><p>Sholinganallur, Chennai<br />Tamil Nadu 600119</p><p>Closes approximately 11:30 PM<br />Please call to confirm today’s hours.</p><a href={restaurant.website} target="_blank" rel="noreferrer">fattoush.in ↗</a></div></div><div className="footer-bottom"><span>© 2026 Fattoush Restaurant & Banquet</span><span>Made for good food. And great company.</span></div><div className="pattern-line" aria-hidden="true" /></footer>;
}
